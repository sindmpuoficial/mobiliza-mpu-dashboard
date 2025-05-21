import { useState } from 'react';
import { exportToExcel, exportToCSV, prepareReportData } from '../services/exportService';

// Hook personalizado para exportação de dados
function useDataExport(statesData, mpuData, citiesData) {
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState(null);

  // Exportar dados de estados
  const exportStatesData = (format = 'xlsx') => {
    setIsExporting(true);
    setError(null);

    try {
      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = `mobiliza-mpu-estados-${dateStr}`;
      
      let success = false;
      if (format === 'xlsx') {
        success = exportToExcel(statesData, fileName, 'Estados');
      } else if (format === 'csv') {
        success = exportToCSV(statesData, fileName);
      }
      
      if (!success) {
        throw new Error(`Falha ao exportar dados para ${format.toUpperCase()}`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsExporting(false);
    }
  };

  // Exportar dados de órgãos
  const exportMpuData = (format = 'xlsx') => {
    setIsExporting(true);
    setError(null);

    try {
      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = `mobiliza-mpu-orgaos-${dateStr}`;
      
      let success = false;
      if (format === 'xlsx') {
        success = exportToExcel(mpuData, fileName, 'Órgãos');
      } else if (format === 'csv') {
        success = exportToCSV(mpuData, fileName);
      }
      
      if (!success) {
        throw new Error(`Falha ao exportar dados para ${format.toUpperCase()}`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsExporting(false);
    }
  };

  // Exportar dados de cidades
  const exportCitiesData = (format = 'xlsx') => {
    if (!citiesData || citiesData.length === 0) {
      setError('Não existem dados de unidades para exportar');
      return;
    }
    
    setIsExporting(true);
    setError(null);

    try {
      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = `mobiliza-mpu-unidades-${dateStr}`;
      
      let success = false;
      if (format === 'xlsx') {
        success = exportToExcel(citiesData, fileName, 'Unidades');
      } else if (format === 'csv') {
        success = exportToCSV(citiesData, fileName);
      }
      
      if (!success) {
        throw new Error(`Falha ao exportar dados para ${format.toUpperCase()}`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsExporting(false);
    }
  };

  // Exportar relatório completo
  const exportFullReport = () => {
    setIsExporting(true);
    setError(null);

    try {
      const dateStr = new Date().toISOString().split('T')[0];
      const fileName = `mobiliza-mpu-relatorio-completo-${dateStr}`;
      
      // Preparar as várias folhas de dados
      const workbook = [
        { name: 'Estados', data: statesData },
        { name: 'Órgãos', data: mpuData }
      ];
      
      if (citiesData && citiesData.length > 0) {
        workbook.push({ name: 'Unidades', data: citiesData });
      }
      
      // Adicionar relatório estatístico
      const reportData = prepareReportData(statesData, mpuData, citiesData);
      
      // Transformar o relatório em linhas para o Excel
      const reportRows = [
        { item: 'Data do Relatório', valor: new Date().toLocaleString() },
        { item: 'Média de Adesão (Estados)', valor: `${reportData.averageStateValue}%` },
        { item: 'Média de Adesão (Órgãos)', valor: `${reportData.averageMpuValue}%` },
        { item: 'Estados com Alta Adesão', valor: reportData.stateAdherenceLevels.high },
        { item: 'Estados com Média Adesão', valor: reportData.stateAdherenceLevels.medium },
        { item: 'Estados com Baixa Adesão', valor: reportData.stateAdherenceLevels.low },
        { item: 'Unidades com Alta Adesão', valor: reportData.cityAdherenceLevels.high },
        { item: 'Unidades com Média Adesão', valor: reportData.cityAdherenceLevels.medium },
        { item: 'Unidades com Baixa Adesão', valor: reportData.cityAdherenceLevels.low }
      ];
      
      // Adicionar médias regionais
      Object.entries(reportData.regionRanking).forEach(([region, data]) => {
        reportRows.push({ 
          item: `Média de Adesão - Região ${region}`, 
          valor: `${data.average}%` 
        });
      });
      
      workbook.push({ name: 'Relatório', data: reportRows });
      
      // Exportar todas as folhas para um único arquivo Excel
      let success = false;
      for (const sheet of workbook) {
        success = exportToExcel(sheet.data, fileName, sheet.name);
        if (!success) {
          throw new Error(`Falha ao exportar folha ${sheet.name}`);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsExporting(false);
    }
  };

  return {
    isExporting,
    error,
    exportStatesData,
    exportMpuData,
    exportCitiesData,
    exportFullReport
  };
}

export default useDataExport;