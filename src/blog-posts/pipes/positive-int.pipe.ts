import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class PositiveIntPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const id = parseInt(value);
        if (isNaN(id)) {
            throw new BadRequestException('ID must be a number');
        }
        if (id <= 0) {
            throw new BadRequestException('ID must be positive number')
        }
        return id;
    }
}