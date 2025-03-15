import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class DeletedAtInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data) => {
                // Handle primitive types (like numbers from getPostCount)
                if (data === null || data === undefined || typeof data !== 'object') {
                    return data;
                }
                
                // Handle arrays
                if (Array.isArray(data)) {
                    return data.filter(rec => rec && (!rec.deletedAt));
                }
                
                // Handle objects
                if (data.deletedAt === null) {
                    return data;
                }
                
                if (!('deletedAt' in data)) {
                    return data;
                }
                
                return null;
            })
        )
    }
}