import { Transportadora } from './transportadora';

export interface Entrega {
  id: number;
  dataEntrega: string;
  endereco: string;
  valor: number;
  status: boolean; // (0 - PENDENTE / 1 - ENTREGUE)
  transportadora: Transportadora;
}
