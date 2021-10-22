import { Resource } from "../interfaces/Resource";
import { AbstractResourceService } from "./AbstractResourceService";
import { ResourceFileService } from "./resource-file.service";
import { ResourceMongoService } from "./resource-mongo.service";
import { ResourceService } from "./resource.service";

export class ResourceServiceFactory {
  static get<T extends Resource>(
    type: string,
    resourceName: string
  ): AbstractResourceService<T> {
    switch (type) {
      case "ram":
        return new ResourceService<T>();
      case "file":
        return new ResourceFileService<T>(resourceName);
      case "mongodb":
        return new ResourceMongoService<T>(resourceName);
      default:
        throw new Error(
          "Bad type: should be ram, file or mongodb. Actual value = " + type
        );
    }
  }
}
