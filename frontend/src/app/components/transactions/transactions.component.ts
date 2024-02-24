import { Component } from '@angular/core';
import { Transaction } from './transaction.model';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-transactions',
  standalone: true,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  imports: [CommonModule, ClarityModule], // Include CommonModule here
})
export class TransactionsComponent {
  transactions: Transaction[] = [
    {
      "id": "65d5202187d3df51af7efc59",
      "iban": "NL54XXXX1782461868",
      "amount": "$3,238.48",
      "recipient": "Smith Williamson",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d52021b4fc1898cd860298",
      "iban": "NL54XXXX1782461868",
      "amount": "$1,298.53",
      "recipient": "Irwin Luna",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d520212cc5a45c87ec4e53",
      "iban": "NL54XXXX1782461868",
      "amount": "$3,675.10",
      "recipient": "Short Dillon",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d520219bf5e959dd5a9895",
      "iban": "NL54XXXX1782461868",
      "amount": "$3,134.83",
      "recipient": "Melva Bradford",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d52021b2d038a3da66f12e",
      "iban": "NL54XXXX1782461868",
      "amount": "$3,203.74",
      "recipient": "Adkins Carlson",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d52021e52ff889dd90a635",
      "iban": "NL54XXXX1782461868",
      "amount": "$1,234.53",
      "recipient": "Marcie Mejia",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d5202130c7776b149cbee6",
      "iban": "NL54XXXX1782461868",
      "amount": "$2,883.10",
      "recipient": "Angelia Bailey",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d52021b38fc354563f10f6",
      "iban": "NL54XXXX1782461868",
      "amount": "$1,146.93",
      "recipient": "Gina Thomas",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d52021f386faab65044cb1",
      "iban": "NL54XXXX1782461868",
      "amount": "$1,876.10",
      "recipient": "Marie Everett",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d52021e13292bd200b77a0",
      "iban": "NL54XXXX1782461868",
      "amount": "$3,233.56",
      "recipient": "Terrie Molina",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d5202173be101601f2db77",
      "iban": "NL54XXXX1782461868",
      "amount": "$3,460.23",
      "recipient": "Berg Good",
      "ibanRecipient": "NL47XXXX2283681073"
    },
    {
      "id": "65d52021736048a64f42e952",
      "iban": "NL54XXXX1782461868",
      "amount": "$3,730.53",
      "recipient": "Beverly Dunn",
      "ibanRecipient": "NL47XXXX2283681073"
    }
  ]
}
