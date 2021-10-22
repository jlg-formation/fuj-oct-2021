import { Resource } from "../interfaces/Resource";

export class ResourceMongoService<T extends Resource> {
  constructor(protected resourceName: string) {}

  async add(resource: T): Promise<T> {
    return resource;
  }

  async removeBulk(ids: string[]) {
    console.log("removeBulk");
  }

  async retrieveAll(): Promise<T[]> {
    return [];
  }
}
