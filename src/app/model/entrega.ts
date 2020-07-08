import { Transportadora } from './transportadora';

export interface Entrega {
  dataEntrega: Date;
  endereço: string;
  valor: number;
  status: boolean; // (0 - PENDENTE / 1 - ENTREGUE)
  transportadora: Transportadora;
}
