import { Resource } from './resource.model';

export interface Product {
  id: number;
  price: string;
  location: string;
  title: string;
  description: string;
  owner: Owner;
  viewerHasSaved: boolean;
  displayResources: Resource[]
}

export interface Owner {
  id: number;
  firstName: string;
  lastName: string;
  profilePicUrl: string;
}
