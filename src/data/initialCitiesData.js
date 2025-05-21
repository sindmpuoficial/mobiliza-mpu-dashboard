// Função para gerar um valor aleatório de adesão para demonstração
const randomValue = () => Math.floor(Math.random() * 100);

// Dados iniciais completos de todas unidades do MPF e MPT no Brasil
export const initialCitiesData = [
  // ========== REGIÃO NORTE ==========
  
  // ACRE (AC)
  { id: "MPF-AC-Capital", state: "AC", city: "Rio Branco", organ: "MPF", value: randomValue() },
  { id: "MPF-AC-Cruzeiro", state: "AC", city: "Cruzeiro do Sul", organ: "MPF", value: randomValue() },
  { id: "MPT-AC-Capital", state: "AC", city: "Rio Branco", organ: "MPT", value: randomValue() },
  
  // AMAZONAS (AM)
  { id: "MPF-AM-Capital", state: "AM", city: "Manaus", organ: "MPF", value: randomValue() },
  { id: "MPF-AM-Tabatinga", state: "AM", city: "Tabatinga", organ: "MPF", value: randomValue() },
  { id: "MPF-AM-Tefé", state: "AM", city: "Tefé", organ: "MPF", value: randomValue() },
  { id: "MPT-AM-Capital", state: "AM", city: "Manaus", organ: "MPT", value: randomValue() },
  
  // AMAPÁ (AP)
  { id: "MPF-AP-Capital", state: "AP", city: "Macapá", organ: "MPF", value: randomValue() },
  { id: "MPF-AP-Laranjal", state: "AP", city: "Laranjal do Jari", organ: "MPF", value: randomValue() },
  { id: "MPT-AP-Capital", state: "AP", city: "Macapá", organ: "MPT", value: randomValue() },
  
  // PARÁ (PA)
  { id: "MPF-PA-Capital", state: "PA", city: "Belém", organ: "MPF", value: randomValue() },
  { id: "MPF-PA-Altamira", state: "PA", city: "Altamira", organ: "MPF", value: randomValue() },
  { id: "MPF-PA-Itaituba", state: "PA", city: "Itaituba", organ: "MPF", value: randomValue() },
  { id: "MPF-PA-Maraba", state: "PA", city: "Marabá", organ: "MPF", value: randomValue() },
  { id: "MPF-PA-Paragominas", state: "PA", city: "Paragominas", organ: "MPF", value: randomValue() },
  { id: "MPF-PA-Redenção", state: "PA", city: "Redenção", organ: "MPF", value: randomValue() },
  { id: "MPF-PA-Santarém", state: "PA", city: "Santarém", organ: "MPF", value: randomValue() },
  { id: "MPF-PA-Tucuruí", state: "PA", city: "Tucuruí", organ: "MPF", value: randomValue() },
  { id: "MPT-PA-Capital", state: "PA", city: "Belém", organ: "MPT", value: randomValue() },
  { id: "MPT-PA-Santarém", state: "PA", city: "Santarém", organ: "MPT", value: randomValue() },
  { id: "MPT-PA-Marabá", state: "PA", city: "Marabá", organ: "MPT", value: randomValue() },
  
  // RONDÔNIA (RO)
  { id: "MPF-RO-Capital", state: "RO", city: "Porto Velho", organ: "MPF", value: randomValue() },
  { id: "MPF-RO-Guajará-Mirim", state: "RO", city: "Guajará-Mirim", organ: "MPF", value: randomValue() },
  { id: "MPF-RO-Ji-Paraná", state: "RO", city: "Ji-Paraná", organ: "MPF", value: randomValue() },
  { id: "MPF-RO-Vilhena", state: "RO", city: "Vilhena", organ: "MPF", value: randomValue() },
  { id: "MPT-RO-Capital", state: "RO", city: "Porto Velho", organ: "MPT", value: randomValue() },
  
  // RORAIMA (RR)
  { id: "MPF-RR-Capital", state: "RR", city: "Boa Vista", organ: "MPF", value: randomValue() },
  { id: "MPT-RR-Capital", state: "RR", city: "Boa Vista", organ: "MPT", value: randomValue() },
  
  // TOCANTINS (TO)
  { id: "MPF-TO-Capital", state: "TO", city: "Palmas", organ: "MPF", value: randomValue() },
  { id: "MPF-TO-Araguaína", state: "TO", city: "Araguaína", organ: "MPF", value: randomValue() },
  { id: "MPF-TO-Gurupi", state: "TO", city: "Gurupi", organ: "MPF", value: randomValue() },
  { id: "MPT-TO-Capital", state: "TO", city: "Palmas", organ: "MPT", value: randomValue() },
  { id: "MPT-TO-Araguaína", state: "TO", city: "Araguaína", organ: "MPT", value: randomValue() },
  
  // ========== REGIÃO NORDESTE ==========
  
  // ALAGOAS (AL)
  { id: "MPF-AL-Capital", state: "AL", city: "Maceió", organ: "MPF", value: randomValue() },
  { id: "MPF-AL-Arapiraca", state: "AL", city: "Arapiraca", organ: "MPF", value: randomValue() },
  { id: "MPT-AL-Capital", state: "AL", city: "Maceió", organ: "MPT", value: randomValue() },
  
  // BAHIA (BA)
  { id: "MPF-BA-Capital", state: "BA", city: "Salvador", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Barreiras", state: "BA", city: "Barreiras", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Campo-Formoso", state: "BA", city: "Campo Formoso", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Eunápolis", state: "BA", city: "Eunápolis", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Feira-de-Santana", state: "BA", city: "Feira de Santana", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Guanambi", state: "BA", city: "Guanambi", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Ilhéus", state: "BA", city: "Ilhéus", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Irecê", state: "BA", city: "Irecê", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Jequié", state: "BA", city: "Jequié", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Paulo-Afonso", state: "BA", city: "Paulo Afonso", organ: "MPF", value: randomValue() },
  { id: "MPF-BA-Vitória-da-Conquista", state: "BA", city: "Vitória da Conquista", organ: "MPF", value: randomValue() },
  { id: "MPT-BA-Capital", state: "BA", city: "Salvador", organ: "MPT", value: randomValue() },
  { id: "MPT-BA-Vitoria-da-Conquista", state: "BA", city: "Vitória da Conquista", organ: "MPT", value: randomValue() },
  { id: "MPT-BA-Feira-de-Santana", state: "BA", city: "Feira de Santana", organ: "MPT", value: randomValue() },
  { id: "MPT-BA-Barreiras", state: "BA", city: "Barreiras", organ: "MPT", value: randomValue() },
  { id: "MPT-BA-Santo-Antonio-de-Jesus", state: "BA", city: "Santo Antônio de Jesus", organ: "MPT", value: randomValue() },
  
  // CEARÁ (CE)
  { id: "MPF-CE-Capital", state: "CE", city: "Fortaleza", organ: "MPF", value: randomValue() },
  { id: "MPF-CE-Juazeiro-do-Norte", state: "CE", city: "Juazeiro do Norte", organ: "MPF", value: randomValue() },
  { id: "MPF-CE-Limoeiro-do-Norte", state: "CE", city: "Limoeiro do Norte", organ: "MPF", value: randomValue() },
  { id: "MPF-CE-Sobral", state: "CE", city: "Sobral", organ: "MPF", value: randomValue() },
  { id: "MPT-CE-Capital", state: "CE", city: "Fortaleza", organ: "MPT", value: randomValue() },
  { id: "MPT-CE-Juazeiro-do-Norte", state: "CE", city: "Juazeiro do Norte", organ: "MPT", value: randomValue() },
  
  // MARANHÃO (MA)
  { id: "MPF-MA-Capital", state: "MA", city: "São Luís", organ: "MPF", value: randomValue() },
  { id: "MPF-MA-Caxias", state: "MA", city: "Caxias", organ: "MPF", value: randomValue() },
  { id: "MPF-MA-Imperatriz", state: "MA", city: "Imperatriz", organ: "MPF", value: randomValue() },
  { id: "MPT-MA-Capital", state: "MA", city: "São Luís", organ: "MPT", value: randomValue() },
  { id: "MPT-MA-Imperatriz", state: "MA", city: "Imperatriz", organ: "MPT", value: randomValue() },
  
  // PARAÍBA (PB)
  { id: "MPF-PB-Capital", state: "PB", city: "João Pessoa", organ: "MPF", value: randomValue() },
  { id: "MPF-PB-Campina-Grande", state: "PB", city: "Campina Grande", organ: "MPF", value: randomValue() },
  { id: "MPF-PB-Patos", state: "PB", city: "Patos", organ: "MPF", value: randomValue() },
  { id: "MPF-PB-Sousa", state: "PB", city: "Sousa", organ: "MPF", value: randomValue() },
  { id: "MPT-PB-Capital", state: "PB", city: "João Pessoa", organ: "MPT", value: randomValue() },
  { id: "MPT-PB-Campina-Grande", state: "PB", city: "Campina Grande", organ: "MPT", value: randomValue() },
  
  // PERNAMBUCO (PE)
  { id: "MPF-PE-Capital", state: "PE", city: "Recife", organ: "MPF", value: randomValue() },
  { id: "MPF-PE-Caruaru", state: "PE", city: "Caruaru", organ: "MPF", value: randomValue() },
  { id: "MPF-PE-Garanhuns", state: "PE", city: "Garanhuns", organ: "MPF", value: randomValue() },
  { id: "MPF-PE-Petrolina", state: "PE", city: "Petrolina", organ: "MPF", value: randomValue() },
  { id: "MPF-PE-Salgueiro", state: "PE", city: "Salgueiro", organ: "MPF", value: randomValue() },
  { id: "MPF-PE-Serra-Talhada", state: "PE", city: "Serra Talhada", organ: "MPF", value: randomValue() },
  { id: "MPT-PE-Capital", state: "PE", city: "Recife", organ: "MPT", value: randomValue() },
  { id: "MPT-PE-Caruaru", state: "PE", city: "Caruaru", organ: "MPT", value: randomValue() },
  
  // PIAUÍ (PI)
  { id: "MPF-PI-Capital", state: "PI", city: "Teresina", organ: "MPF", value: randomValue() },
  { id: "MPF-PI-Floriano", state: "PI", city: "Floriano", organ: "MPF", value: randomValue() },
  { id: "MPF-PI-Parnaíba", state: "PI", city: "Parnaíba", organ: "MPF", value: randomValue() },
  { id: "MPF-PI-Picos", state: "PI", city: "Picos", organ: "MPF", value: randomValue() },
  { id: "MPT-PI-Capital", state: "PI", city: "Teresina", organ: "MPT", value: randomValue() },
  
  // RIO GRANDE DO NORTE (RN)
  { id: "MPF-RN-Capital", state: "RN", city: "Natal", organ: "MPF", value: randomValue() },
  { id: "MPF-RN-Caicó", state: "RN", city: "Caicó", organ: "MPF", value: randomValue() },
  { id: "MPF-RN-Mossoró", state: "RN", city: "Mossoró", organ: "MPF", value: randomValue() },
  { id: "MPF-RN-Pau-dos-Ferros", state: "RN", city: "Pau dos Ferros", organ: "MPF", value: randomValue() },
  { id: "MPT-RN-Capital", state: "RN", city: "Natal", organ: "MPT", value: randomValue() },
  { id: "MPT-RN-Mossoró", state: "RN", city: "Mossoró", organ: "MPT", value: randomValue() },
  
  // SERGIPE (SE)
  { id: "MPF-SE-Capital", state: "SE", city: "Aracaju", organ: "MPF", value: randomValue() },
  { id: "MPF-SE-Itabaiana", state: "SE", city: "Itabaiana", organ: "MPF", value: randomValue() },
  { id: "MPF-SE-Lagarto", state: "SE", city: "Lagarto", organ: "MPF", value: randomValue() },
  { id: "MPF-SE-Propriá", state: "SE", city: "Propriá", organ: "MPF", value: randomValue() },
  { id: "MPT-SE-Capital", state: "SE", city: "Aracaju", organ: "MPT", value: randomValue() },
  
  // ========== REGIÃO CENTRO-OESTE ==========
  
  // DISTRITO FEDERAL (DF)
  { id: "MPF-DF-Capital", state: "DF", city: "Brasília", organ: "MPF", value: randomValue() },
  { id: "MPT-DF-Capital", state: "DF", city: "Brasília", organ: "MPT", value: randomValue() },
  { id: "MPM-DF-Capital", state: "DF", city: "Brasília", organ: "MPM", value: randomValue() },
  { id: "MPDFT-DF-Capital", state: "DF", city: "Brasília", organ: "MPDFT", value: randomValue() },
  { id: "CNMP-DF-Capital", state: "DF", city: "Brasília", organ: "CNMP", value: randomValue() },
  { id: "ESMPU-DF-Capital", state: "DF", city: "Brasília", organ: "ESMPU", value: randomValue() },
  
  // GOIÁS (GO)
  { id: "MPF-GO-Capital", state: "GO", city: "Goiânia", organ: "MPF", value: randomValue() },
  { id: "MPF-GO-Anápolis", state: "GO", city: "Anápolis", organ: "MPF", value: randomValue() },
  { id: "MPF-GO-Formosa", state: "GO", city: "Formosa", organ: "MPF", value: randomValue() },
  { id: "MPF-GO-Jataí", state: "GO", city: "Jataí", organ: "MPF", value: randomValue() },
  { id: "MPF-GO-Luziânia", state: "GO", city: "Luziânia", organ: "MPF", value: randomValue() },
  { id: "MPF-GO-Rio-Verde", state: "GO", city: "Rio Verde", organ: "MPF", value: randomValue() },
  { id: "MPF-GO-Uruaçu", state: "GO", city: "Uruaçu", organ: "MPF", value: randomValue() },
  { id: "MPT-GO-Capital", state: "GO", city: "Goiânia", organ: "MPT", value: randomValue() },
  { id: "MPT-GO-Anápolis", state: "GO", city: "Anápolis", organ: "MPT", value: randomValue() },
  { id: "MPT-GO-Luziânia", state: "GO", city: "Luziânia", organ: "MPT", value: randomValue() },
  
  // MATO GROSSO (MT)
  { id: "MPF-MT-Capital", state: "MT", city: "Cuiabá", organ: "MPF", value: randomValue() },
  { id: "MPF-MT-Barra-do-Garças", state: "MT", city: "Barra do Garças", organ: "MPF", value: randomValue() },
  { id: "MPF-MT-Cáceres", state: "MT", city: "Cáceres", organ: "MPF", value: randomValue() },
  { id: "MPF-MT-Rondonópolis", state: "MT", city: "Rondonópolis", organ: "MPF", value: randomValue() },
  { id: "MPF-MT-Sinop", state: "MT", city: "Sinop", organ: "MPF", value: randomValue() },
  { id: "MPT-MT-Capital", state: "MT", city: "Cuiabá", organ: "MPT", value: randomValue() },
  { id: "MPT-MT-Rondonópolis", state: "MT", city: "Rondonópolis", organ: "MPT", value: randomValue() },
  
  // MATO GROSSO DO SUL (MS)
  { id: "MPF-MS-Capital", state: "MS", city: "Campo Grande", organ: "MPF", value: randomValue() },
  { id: "MPF-MS-Corumbá", state: "MS", city: "Corumbá", organ: "MPF", value: randomValue() },
  { id: "MPF-MS-Coxim", state: "MS", city: "Coxim", organ: "MPF", value: randomValue() },
  { id: "MPF-MS-Dourados", state: "MS", city: "Dourados", organ: "MPF", value: randomValue() },
  { id: "MPF-MS-Naviraí", state: "MS", city: "Naviraí", organ: "MPF", value: randomValue() },
  { id: "MPF-MS-Ponta-Porã", state: "MS", city: "Ponta Porã", organ: "MPF", value: randomValue() },
  { id: "MPF-MS-Três-Lagoas", state: "MS", city: "Três Lagoas", organ: "MPF", value: randomValue() },
  { id: "MPT-MS-Capital", state: "MS", city: "Campo Grande", organ: "MPT", value: randomValue() },
  { id: "MPT-MS-Dourados", state: "MS", city: "Dourados", organ: "MPT", value: randomValue() },
  
  // ========== REGIÃO SUDESTE ==========
  
  // ESPÍRITO SANTO (ES)
  { id: "MPF-ES-Capital", state: "ES", city: "Vitória", organ: "MPF", value: randomValue() },
  { id: "MPF-ES-Cachoeiro", state: "ES", city: "Cachoeiro de Itapemirim", organ: "MPF", value: randomValue() },
  { id: "MPF-ES-Colatina", state: "ES", city: "Colatina", organ: "MPF", value: randomValue() },
  { id: "MPF-ES-Linhares", state: "ES", city: "Linhares", organ: "MPF", value: randomValue() },
  { id: "MPF-ES-São-Mateus", state: "ES", city: "São Mateus", organ: "MPF", value: randomValue() },
  { id: "MPF-ES-Serra", state: "ES", city: "Serra", organ: "MPF", value: randomValue() },
  { id: "MPT-ES-Capital", state: "ES", city: "Vitória", organ: "MPT", value: randomValue() },
  { id: "MPT-ES-Colatina", state: "ES", city: "Colatina", organ: "MPT", value: randomValue() },
  { id: "MPT-ES-Sao-Mateus", state: "ES", city: "São Mateus", organ: "MPT", value: randomValue() },
  
  // MINAS GERAIS (MG)
  { id: "MPF-MG-Capital", state: "MG", city: "Belo Horizonte", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Divinópolis", state: "MG", city: "Divinópolis", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Governador-Valadares", state: "MG", city: "Governador Valadares", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Ipatinga", state: "MG", city: "Ipatinga", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Juiz-de-Fora", state: "MG", city: "Juiz de Fora", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Montes-Claros", state: "MG", city: "Montes Claros", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Passos", state: "MG", city: "Passos", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Patos-de-Minas", state: "MG", city: "Patos de Minas", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Pouso-Alegre", state: "MG", city: "Pouso Alegre", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-São-João-del-Rei", state: "MG", city: "São João del-Rei", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Sete-Lagoas", state: "MG", city: "Sete Lagoas", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Teófilo-Otoni", state: "MG", city: "Teófilo Otoni", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Uberaba", state: "MG", city: "Uberaba", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Uberlândia", state: "MG", city: "Uberlândia", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Varginha", state: "MG", city: "Varginha", organ: "MPF", value: randomValue() },
  { id: "MPF-MG-Viçosa", state: "MG", city: "Viçosa", organ: "MPF", value: randomValue() },
  { id: "MPT-MG-Capital", state: "MG", city: "Belo Horizonte", organ: "MPT", value: randomValue() },
  { id: "MPT-MG-Juiz-de-Fora", state: "MG", city: "Juiz de Fora", organ: "MPT", value: randomValue() },
  { id: "MPT-MG-Uberlândia", state: "MG", city: "Uberlândia", organ: "MPT", value: randomValue() },
  { id: "MPT-MG-Varginha", state: "MG", city: "Varginha", organ: "MPT", value: randomValue() },
  
  // RIO DE JANEIRO (RJ)
  { id: "MPF-RJ-Capital", state: "RJ", city: "Rio de Janeiro", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-Angra-dos-Reis", state: "RJ", city: "Angra dos Reis", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-Campos", state: "RJ", city: "Campos dos Goytacazes", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-Itaperuna", state: "RJ", city: "Itaperuna", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-Niterói", state: "RJ", city: "Niterói", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-Nova-Friburgo", state: "RJ", city: "Nova Friburgo", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-Petrópolis", state: "RJ", city: "Petrópolis", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-Resende", state: "RJ", city: "Resende", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-São-Gonçalo", state: "RJ", city: "São Gonçalo", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-São-João-de-Meriti", state: "RJ", city: "São João de Meriti", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-São-Pedro-da-Aldeia", state: "RJ", city: "São Pedro da Aldeia", organ: "MPF", value: randomValue() },
  { id: "MPF-RJ-Volta-Redonda", state: "RJ", city: "Volta Redonda", organ: "MPF", value: randomValue() },
  { id: "MPT-RJ-Capital", state: "RJ", city: "Rio de Janeiro", organ: "MPT", value: randomValue() },
  { id: "MPT-RJ-Campos", state: "RJ", city: "Campos dos Goytacazes", organ: "MPT", value: randomValue() },
  { id: "MPT-RJ-Nova-Friburgo", state: "RJ", city: "Nova Friburgo", organ: "MPT", value: randomValue() },
  
  // SÃO PAULO (SP)
  { id: "MPF-SP-Capital", state: "SP", city: "São Paulo", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Araçatuba", state: "SP", city: "Araçatuba", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Araraquara", state: "SP", city: "Araraquara", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Barretos", state: "SP", city: "Barretos", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Bauru", state: "SP", city: "Bauru", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Bragança-Paulista", state: "SP", city: "Bragança Paulista", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Campinas", state: "SP", city: "Campinas", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Caraguatatuba", state: "SP", city: "Caraguatatuba", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Franca", state: "SP", city: "Franca", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Guarulhos", state: "SP", city: "Guarulhos", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Jales", state: "SP", city: "Jales", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Jundiaí", state: "SP", city: "Jundiaí", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Marília", state: "SP", city: "Marília", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Osasco", state: "SP", city: "Osasco", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Piracicaba", state: "SP", city: "Piracicaba", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Presidente-Prudente", state: "SP", city: "Presidente Prudente", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Registro", state: "SP", city: "Registro", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Ribeirão-Preto", state: "SP", city: "Ribeirão Preto", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Santo-André", state: "SP", city: "Santo André", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Santos", state: "SP", city: "Santos", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-São-Bernardo-do-Campo", state: "SP", city: "São Bernardo do Campo", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-São-Carlos", state: "SP", city: "São Carlos", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-São-José-dos-Campos", state: "SP", city: "São José dos Campos", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-São-José-do-Rio-Preto", state: "SP", city: "São José do Rio Preto", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Sorocaba", state: "SP", city: "Sorocaba", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Taubaté", state: "SP", city: "Taubaté", organ: "MPF", value: randomValue() },
  { id: "MPF-SP-Tupã", state: "SP", city: "Tupã", organ: "MPF", value: randomValue() },
  { id: "MPT-SP-Capital", state: "SP", city: "São Paulo", organ: "MPT", value: randomValue() },
  { id: "MPT-SP-Araçatuba", state: "SP", city: "Araçatuba", organ: "MPT", value: randomValue() },
  { id: "MPT-SP-Bauru", state: "SP", city: "Bauru", organ: "MPT", value: randomValue() },
  { id: "MPT-SP-Campinas", state: "SP", city: "Campinas", organ: "MPT", value: randomValue() },
  { id: "MPT-SP-Presidente-Prudente", state: "SP", city: "Presidente Prudente", organ: "MPT", value: randomValue() },
  { id: "MPT-SP-Ribeirão-Preto", state: "SP", city: "Ribeirão Preto", organ: "MPT", value: randomValue() },
  { id: "MPT-SP-Santos", state: "SP", city: "Santos", organ: "MPT", value: randomValue() },
  { id: "MPT-SP-São-Bernardo-do-Campo", state: "SP", city: "São Bernardo do Campo", organ: "MPT", value: randomValue() },
  { id: "MPT-SP-Sorocaba", state: "SP", city: "Sorocaba", organ: "MPT", value: randomValue() },
  
  // ========== REGIÃO SUL ==========
  
  // PARANÁ (PR)
  { id: "MPF-PR-Capital", state: "PR", city: "Curitiba", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Apucarana", state: "PR", city: "Apucarana", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Campo-Mourão", state: "PR", city: "Campo Mourão", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Cascavel", state: "PR", city: "Cascavel", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Foz-do-Iguaçu", state: "PR", city: "Foz do Iguaçu", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Francisco-Beltrão", state: "PR", city: "Francisco Beltrão", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Guarapuava", state: "PR", city: "Guarapuava", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Jacarezinho", state: "PR", city: "Jacarezinho", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Londrina", state: "PR", city: "Londrina", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Maringá", state: "PR", city: "Maringá", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Paranaguá", state: "PR", city: "Paranaguá", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Paranavaí", state: "PR", city: "Paranavaí", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Pato-Branco", state: "PR", city: "Pato Branco", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Ponta-Grossa", state: "PR", city: "Ponta Grossa", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-Umuarama", state: "PR", city: "Umuarama", organ: "MPF", value: randomValue() },
  { id: "MPF-PR-União-da-Vitória", state: "PR", city: "União da Vitória", organ: "MPF", value: randomValue() },
  { id: "MPT-PR-Capital", state: "PR", city: "Curitiba", organ: "MPT", value: randomValue() },
  { id: "MPT-PR-Cascavel", state: "PR", city: "Cascavel", organ: "MPT", value: randomValue() },
  { id: "MPT-PR-Londrina", state: "PR", city: "Londrina", organ: "MPT", value: randomValue() },
  { id: "MPT-PR-Maringá", state: "PR", city: "Maringá", organ: "MPT", value: randomValue() },
  
  // RIO GRANDE DO SUL (RS)
  { id: "MPF-RS-Capital", state: "RS", city: "Porto Alegre", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Bagé", state: "RS", city: "Bagé", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Bento-Gonçalves", state: "RS", city: "Bento Gonçalves", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Cachoeira-do-Sul", state: "RS", city: "Cachoeira do Sul", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Canoas", state: "RS", city: "Canoas", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Capão-da-Canoa", state: "RS", city: "Capão da Canoa", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Caxias-do-Sul", state: "RS", city: "Caxias do Sul", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Cruz-Alta", state: "RS", city: "Cruz Alta", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Erechim", state: "RS", city: "Erechim", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Lajeado", state: "RS", city: "Lajeado", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Novo-Hamburgo", state: "RS", city: "Novo Hamburgo", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Passo-Fundo", state: "RS", city: "Passo Fundo", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Pelotas", state: "RS", city: "Pelotas", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Rio-Grande", state: "RS", city: "Rio Grande", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Santa-Cruz-do-Sul", state: "RS", city: "Santa Cruz do Sul", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Santa-Maria", state: "RS", city: "Santa Maria", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Santa-Rosa", state: "RS", city: "Santa Rosa", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Santana-do-Livramento", state: "RS", city: "Santana do Livramento", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Santo-Ângelo", state: "RS", city: "Santo Ângelo", organ: "MPF", value: randomValue() },
  { id: "MPF-RS-Uruguaiana", state: "RS", city: "Uruguaiana", organ: "MPF", value: randomValue() },
  { id: "MPT-RS-Capital", state: "RS", city: "Porto Alegre", organ: "MPT", value: randomValue() },
  { id: "MPT-RS-Caxias-do-Sul", state: "RS", city: "Caxias do Sul", organ: "MPT", value: randomValue() },
  { id: "MPT-RS-Santa-Maria", state: "RS", city: "Santa Maria", organ: "MPT", value: randomValue() },
  { id: "MPT-RS-Pelotas", state: "RS", city: "Pelotas", organ: "MPT", value: randomValue() },
  { id: "MPT-RS-Passo-Fundo", state: "RS", city: "Passo Fundo", organ: "MPT", value: randomValue() },
  { id: "MPT-RS-Novo-Hamburgo", state: "RS", city: "Novo Hamburgo", organ: "MPT", value: randomValue() },
  
  // SANTA CATARINA (SC)
  { id: "MPF-SC-Capital", state: "SC", city: "Florianópolis", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Blumenau", state: "SC", city: "Blumenau", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Caçador", state: "SC", city: "Caçador", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Chapecó", state: "SC", city: "Chapecó", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Concórdia", state: "SC", city: "Concórdia", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Criciúma", state: "SC", city: "Criciúma", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Itajaí", state: "SC", city: "Itajaí", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Jaraguá-do-Sul", state: "SC", city: "Jaraguá do Sul", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Joaçaba", state: "SC", city: "Joaçaba", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Joinville", state: "SC", city: "Joinville", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Lages", state: "SC", city: "Lages", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Mafra", state: "SC", city: "Mafra", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Rio-do-Sul", state: "SC", city: "Rio do Sul", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-São-Miguel-do-Oeste", state: "SC", city: "São Miguel do Oeste", organ: "MPF", value: randomValue() },
  { id: "MPF-SC-Tubarão", state: "SC", city: "Tubarão", organ: "MPF", value: randomValue() },
  { id: "MPT-SC-Capital", state: "SC", city: "Florianópolis", organ: "MPT", value: randomValue() },
  { id: "MPT-SC-Blumenau", state: "SC", city: "Blumenau", organ: "MPT", value: randomValue() },
  { id: "MPT-SC-Chapecó", state: "SC", city: "Chapecó", organ: "MPT", value: randomValue() },
  { id: "MPT-SC-Criciúma", state: "SC", city: "Criciúma", organ: "MPT", value: randomValue() },
  { id: "MPT-SC-Joinville", state: "SC", city: "Joinville", organ: "MPT", value: randomValue() }
];

// Função para inicializar os dados de cidades
export const generateInitialCitiesData = () => {
  return initialCitiesData;
};