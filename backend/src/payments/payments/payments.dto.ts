import {
  IsNotEmpty,
  IsString,
  IsNumber,
  MaxLength,
  Min,
  Max,
} from "class-validator";
// this will validate the request data is correct
export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20) // Assuming IBAN is the same as recipient IBAN max length
  iban: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20) // recipient IBAN max length
  ibanRecipient: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20) // Max length for recipient's name
  recipient: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.01) // minimum transaction amount
  @Max(10000) // max transaction amount
  amount: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50) // max length
  description: string;
}
