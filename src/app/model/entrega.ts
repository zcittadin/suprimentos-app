import { Transportadora } from './transportadora';

export interface Entrega {
  id: number;
  dataEntrega: Date;
  endereco: string;
  valor: number;
  status: boolean; // (0 - PENDENTE / 1 - ENTREGUE)
  transportadora: Transportadora;
}
