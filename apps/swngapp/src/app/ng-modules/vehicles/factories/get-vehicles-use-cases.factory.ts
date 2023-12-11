import { VehiclesAdapter, VehiclesUseCases } from '@swfalcon/swdata';
import { HttpBase } from '@swfalcon/swdata';

export const getVehiclesUseCasesService = (http: HttpBase) => {
  const adapter = new VehiclesAdapter(http);

  return new VehiclesUseCases(adapter);
}