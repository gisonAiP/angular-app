import { Resource } from './resource.model';

export interface Category {
  id: number;
  name: string;
  displayOrder: number;
  displayResources: Resource
}
