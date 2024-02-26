import { IsNotEmpty, IsString, IsNumber, MaxLength, Min, Max} from 'class-validator';
// this will validate the request data is correct
export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(34) // Assuming IBAN max length
  iban: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(34) // Assuming recipient IBAN max length
  ibanRecipient: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100) // Max length for recipient's name
  recipient: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.01) // Assuming the minimum transaction amount
  @Max(10000) // Assuming the max transaction amount
  amount: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50) 
  description: string;
}
