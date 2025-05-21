import React from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { PIE_COLORS } from '../data/constants';
import { Download } from 'lucide-react';

const StatsView = ({ 
  statesData, 
  mpuData, 
  regionData, 
  exportStatesData, 
  exportMpuData, 
  exportFullReport,
  isExporting 
}) => {
  return (
    <div className="space-y-6">
      {/* Botões de exportação */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Exportar Dados</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => exportStatesData('xlsx')}
            disabled={isExporting}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            <Download size={16} className="mr-2" />
            Dados dos Estados (Excel)
          </button>
          
          <button
            onClick={() => exportMpuData('xlsx')}
            disabled={isExporting}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            <Download size={16} className="mr-2" />
            Dados dos Órgãos (Excel)
          </button>
          
          <button
            onClick={exportFullReport}
            disabled={isExporting}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
          >
            <Download size={16} className="mr-2" />
            Relatório Completo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Adesão por região */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Adesão por Região</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionData}>
                <XAxis dataKey="region" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, 'Adesão']} />
                <Legend />
                <Bar dataKey="value" name="Percentual de Adesão" fill="#19325E" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Adesão por órgão */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Adesão por Órgão</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mpuData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="type"
                  label={({type, value}) => `${type}: ${value}%`}
                >
                  {mpuData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Adesão']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Adesão por estado - gráfico horizontal */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Adesão por Estado</h2>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statesData} layout="vertical" margin={{ left: 40 }}>
              <XAxis type="number" domain={[0,
              100]} />
              <YAxis type="category" dataKey="id" width={40} />
              <Tooltip formatter={(value) => [`${value}%`, 'Adesão']} />
              <Legend />
              <Bar dataKey="value" name="Percentual de Adesão" fill="#19325E" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabela de classificação por adesão */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Ranking de Adesão por Estado</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Posição
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  UF
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Região
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Adesão
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[...statesData]
                .sort((a, b) => b.value - a.value)
                .map((state, index) => (
                  <tr key={state.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}º
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {state.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {state.state}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {state.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className="font-bold mr-2" style={{ color: state.value < 50 ? '#FF4444' : '#19325E' }}>
                          {state.value}%
                        </span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${state.value}%`,
                              backgroundColor: state.value < 50 ? '#FF4444' : '#19325E'
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatsView;