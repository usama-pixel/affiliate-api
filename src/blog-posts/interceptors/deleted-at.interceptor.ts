import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class DeletedAtInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data) => {
                if (Array.isArray(data)) {
                    return data.filter(rec => !rec.deletedAt)
                }
                if (data && data.deletedAt === null) {
                    return data
                }
                return null;
            })
        )
    }
}