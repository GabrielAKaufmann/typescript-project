// Simulando a biblioteca externa
class DataExterna {
    private data: string;
  
    constructor(data: string) {
      this.data = data; // formato: YYYY-MM-DD
    }
  
    getData(): string {
      return this.data;
    }
  
    setData(data: string): void {
      this.data = data;
    }
  }
  
  // Classe do sistema atual
  class DataLocal {
    protected data: string;
  
    constructor(data: string) {
      this.data = data; // formato: DD/MM/YYYY
    }
  
    getData(): string {
      return this.data;
    }
  
    setData(data: string): void {
      this.data = data;
    }
  }
  
  // Adapter
  class DataAdapter extends DataLocal {
    private dataExterna: DataExterna;
  
    constructor(dataExterna: DataExterna) {
      super(DataAdapter.converterParaLocal(dataExterna.getData()));
      this.dataExterna = dataExterna;
    }
  
    override getData(): string {
      return DataAdapter.converterParaLocal(this.dataExterna.getData());
    }
  
    override setData(data: string): void {
      this.dataExterna.setData(DataAdapter.converterParaExterna(data));
    }
  
    private static converterParaLocal(dataISO: string): string {
      const [yyyy, mm, dd] = dataISO.split("-");
      return `${dd}/${mm}/${yyyy}`;
    }
  
    private static converterParaExterna(dataLocal: string): string {
      const [dd, mm, yyyy] = dataLocal.split("/");
      return `${yyyy}-${mm}-${dd}`;
    }
  }
  
  // Uso
  const dataExterna = new DataExterna("2025-04-23");
  const dataAdaptada = new DataAdapter(dataExterna);
  
  console.log("Formato local:", dataAdaptada.getData()); // 23/04/2025
  
  dataAdaptada.setData("01/05/2025");
  console.log("Formato externo:", dataExterna.getData()); // 2025-05-01
  