// Service para exportação de dados
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// Exportar dados para Excel
export const exportToExcel = (data, fileName, sheetName = 'Dados') => {
  try {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    
    // Gerar arquivo Excel
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
    saveAs(blob, `${fileName}.xlsx`);
    return true;
  } catch (error) {
    console.error('Erro ao exportar para Excel:', error);
    return false;
  }
};

// Exportar dados para CSV
export const exportToCSV = (data, fileName) => {
  try {
    // Converter dados para CSV
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(item => 
      Object.values(item).map(value => 
        typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value
      ).join(',')
    );
    
    const csvContent = [headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    saveAs(blob, `${fileName}.csv`);
    return true;
  } catch (error) {
    console.error('Erro ao exportar para CSV:', error);
    return false;
  }
};

// Preparar dados para relatório
export const prepareReportData = (statesData, mpuData, citiesData) => {
  // Calcular estatísticas gerais
  const averageStateValue = statesData.reduce((acc, state) => acc + state.value, 0) / statesData.length;
  const averageMpuValue = mpuData.reduce((acc, org) => acc + org.value, 0) / mpuData.length;
  
  // Contagem por nível de adesão (estados)
  const stateAdherenceLevels = {
    high: statesData.filter(state => state.value >= 75).length,
    medium: statesData.filter(state => state.value >= 50 && state.value < 75).length,
    low: statesData.filter(state => state.value < 50).length
  };
  
  // Contagem por nível de adesão (cidades)
  let cityAdherenceLevels = { high: 0, medium: 0, low: 0 };
  
  if (citiesData && citiesData.length > 0) {
    cityAdherenceLevels = {
      high: citiesData.filter(city => city.value >= 75).length,
      medium: citiesData.filter(city => city.value >= 50 && city.value < 75).length,
      low: citiesData.filter(city => city.value < 50).length
    };
  }
  
  // Calcular ranking por região
  const regionRanking = {};
  statesData.forEach(state => {
    if (!regionRanking[state.region]) {
      regionRanking[state.region] = { 
        totalValue: 0, 
        count: 0 
      };
    }
    regionRanking[state.region].totalValue += state.value;
    regionRanking[state.region].count += 1;
  });
  
  // Calcular média por região
  Object.keys(regionRanking).forEach(region => {
    regionRanking[region].average = Math.round(
      regionRanking[region].totalValue / regionRanking[region].count
    );
  });
  
  return {
    timestamp: new Date().toISOString(),
    averageStateValue: Math.round(averageStateValue),
    averageMpuValue: Math.round(averageMpuValue),
    stateAdherenceLevels,
    cityAdherenceLevels,
    regionRanking
  };
};