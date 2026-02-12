// data.js
const schoolData = {
    "portugues": {
        "label": "Língua Portuguesa",
        "history": [
            // Estrutura: { ano: Ano Calendário, serie: Série Escolar, valor: Nota }
            { year: 2019, grade: 2, value: 141.17 }, { year: 2019, grade: 3, value: 147.87 }, { year: 2019, grade: 4, value: 187.39 }, { year: 2019, grade: 5, value: 197.68 }, { year: 2019, grade: 6, value: 202.94 }, { year: 2019, grade: 7, value: 214.69 }, { year: 2019, grade: 8, value: 219.22 }, { year: 2019, grade: 9, value: 241.94 },
            { year: 2021, grade: 2, value: 139.90 }, { year: 2021, grade: 3, value: 145.30 }, { year: 2021, grade: 4, value: 161.40 }, { year: 2021, grade: 5, value: 190.90 }, { year: 2021, grade: 6, value: 183.10 }, { year: 2021, grade: 7, value: 220.70 }, { year: 2021, grade: 8, value: 194.80 }, { year: 2021, grade: 9, value: 205.90 },
            { year: 2022, grade: 2, value: 145.60 }, { year: 2022, grade: 3, value: 150.70 }, { year: 2022, grade: 4, value: 166.20 }, { year: 2022, grade: 5, value: 179.50 }, { year: 2022, grade: 6, value: 197.70 }, { year: 2022, grade: 7, value: 231.80 }, { year: 2022, grade: 8, value: 236.80 }, { year: 2022, grade: 9, value: 215.20 },
            { year: 2023, grade: 2, value: 178.30 }, { year: 2023, grade: 3, value: 168.90 }, { year: 2023, grade: 4, value: 169.00 }, { year: 2023, grade: 5, value: 173.20 }, { year: 2023, grade: 6, value: 192.00 }, { year: 2023, grade: 7, value: 205.40 }, { year: 2023, grade: 8, value: 229.30 }, { year: 2023, grade: 9, value: 241.00 },
            { year: 2024, grade: 2, value: 195.37 }, { year: 2024, grade: 3, value: 172.47 }, { year: 2024, grade: 4, value: 164.95 }, { year: 2024, grade: 5, value: 192.60 }, { year: 2024, grade: 6, value: 205.70 }, { year: 2024, grade: 7, value: 213.50 }, { year: 2024, grade: 8, value: 220.00 }, { year: 2024, grade: 9, value: 247.70 },
            { year: 2025, grade: 5, value: 193.63 }, { year: 2025, grade: 6, value: 198.95 }, { year: 2025, grade: 7, value: 225.18 }, { year: 2025, grade: 8, value: 219.43 }, { year: 2025, grade: 9, value: 228.08 } // Dados parciais de 2025 baseados no PDF
        ],
        "levels_2025": [
            { grade: 2, AB: 1.90, B: 1.90, AD: 26.67, AV: 69.52 },
            { grade: 3, AB: 7.83, B: 51.30, AD: 34.78, AV: 6.09 },
            { grade: 4, AB: 26.17, B: 40.19, AD: 28.97, AV: 4.67 },
            { grade: 5, AB: 13.41, B: 42.68, AD: 36.59, AV: 7.32 },
            { grade: 6, AB: 17.07, B: 47.56, AD: 34.15, AV: 1.22 },
            { grade: 7, AB: 10.71, B: 39.29, AD: 39.29, AV: 10.71 },
            { grade: 8, AB: 19.23, B: 53.85, AD: 23.08, AV: 3.85 },
            { grade: 9, AB: 28.26, B: 51.45, AD: 19.57, AV: 0.72 }
        ]
    },
    "matematica": {
        "label": "Matemática",
        "history": [
            { year: 2019, grade: 2, value: 117.01 }, { year: 2019, grade: 3, value: 146.45 }, { year: 2019, grade: 4, value: 197.14 }, { year: 2019, grade: 5, value: 198.36 }, { year: 2019, grade: 6, value: 198.13 }, { year: 2019, grade: 7, value: 213.11 }, { year: 2019, grade: 8, value: 227.62 }, { year: 2019, grade: 9, value: 242.71 },
            { year: 2021, grade: 4, value: 156.40 }, { year: 2021, grade: 5, value: 176.40 }, { year: 2021, grade: 6, value: 196.80 }, { year: 2021, grade: 7, value: 197.40 }, { year: 2021, grade: 8, value: 204.10 }, { year: 2021, grade: 9, value: 226.20 },
            { year: 2022, grade: 2, value: 123.60 }, { year: 2022, grade: 3, value: 142.80 }, { year: 2022, grade: 4, value: 153.90 }, { year: 2022, grade: 5, value: 191.70 }, { year: 2022, grade: 6, value: 190.90 }, { year: 2022, grade: 7, value: 223.40 }, { year: 2022, grade: 8, value: 237.00 }, { year: 2022, grade: 9, value: 234.50 },
            { year: 2023, grade: 2, value: 145.30 }, { year: 2023, grade: 3, value: 159.20 }, { year: 2023, grade: 4, value: 158.60 }, { year: 2023, grade: 5, value: 194.30 }, { year: 2023, grade: 6, value: 185.30 }, { year: 2023, grade: 7, value: 204.10 }, { year: 2023, grade: 8, value: 239.90 }, { year: 2023, grade: 9, value: 235.00 },
            { year: 2024, grade: 2, value: 180.80 }, { year: 2024, grade: 3, value: 173.10 }, { year: 2024, grade: 4, value: 171.00 }, { year: 2024, grade: 5, value: 188.40 }, { year: 2024, grade: 6, value: 206.70 }, { year: 2024, grade: 7, value: 201.30 }, { year: 2024, grade: 8, value: 221.70 }, { year: 2024, grade: 9, value: 241.40 },
            { year: 2025, grade: 2, value: 219.84 }, { year: 2025, grade: 3, value: 164.57 }, { year: 2025, grade: 4, value: 170.01 }, { year: 2025, grade: 5, value: 193.53 }, { year: 2025, grade: 6, value: 196.60 }, { year: 2025, grade: 7, value: 214.39 }, { year: 2025, grade: 8, value: 216.26 }, { year: 2025, grade: 9, value: 224.27 }
        ],
        "levels_2025": [
            { grade: 2, AB: 0.00, B: 13.86, AD: 23.76, AV: 62.38 },
            { grade: 3, AB: 36.52, B: 42.61, AD: 16.52, AV: 4.35 },
            { grade: 4, AB: 42.06, B: 32.71, AD: 24.30, AV: 0.93 },
            { grade: 5, AB: 32.93, B: 43.90, AD: 20.73, AV: 2.44 },
            { grade: 6, AB: 48.78, B: 35.37, AD: 14.63, AV: 1.22 },
            { grade: 7, AB: 32.14, B: 39.29, AD: 28.57, AV: 0.00 },
            { grade: 8, AB: 44.23, B: 44.23, AD: 11.54, AV: 0.00 },
            { grade: 9, AB: 47.83, B: 46.38, AD: 5.07, AV: 0.72 }
        ]
    },
    "ciencias_naturais": {
        "label": "Ciências Naturais",
        "history": [
            { year: 2019, grade: 3, value: 140.57 }, { year: 2019, grade: 4, value: 172.55 }, { year: 2019, grade: 5, value: 196.87 }, { year: 2019, grade: 6, value: 190.99 }, { year: 2019, grade: 7, value: 214.46 }, { year: 2019, grade: 8, value: 226.42 }, { year: 2019, grade: 9, value: 234.23 },
            { year: 2021, grade: 4, value: 154.20 }, { year: 2021, grade: 5, value: 182.80 }, { year: 2021, grade: 6, value: 192.80 }, { year: 2021, grade: 7, value: 210.40 }, { year: 2021, grade: 8, value: 211.90 }, { year: 2021, grade: 9, value: 213.90 },
            { year: 2022, grade: 3, value: 131.90 }, { year: 2022, grade: 4, value: 131.10 }, { year: 2022, grade: 5, value: 183.70 }, { year: 2022, grade: 6, value: 210.80 }, { year: 2022, grade: 7, value: 224.70 }, { year: 2022, grade: 8, value: 232.40 }, { year: 2022, grade: 9, value: 233.30 },
            { year: 2023, grade: 3, value: 164.70 }, { year: 2023, grade: 4, value: 155.60 }, { year: 2023, grade: 5, value: 183.70 }, { year: 2023, grade: 6, value: 188.80 }, { year: 2023, grade: 7, value: 223.90 }, { year: 2023, grade: 8, value: 233.00 }, { year: 2023, grade: 9, value: 246.00 },
            { year: 2024, grade: 3, value: 162.90 }, { year: 2024, grade: 4, value: 159.20 }, { year: 2024, grade: 5, value: 186.40 }, { year: 2024, grade: 6, value: 202.60 }, { year: 2024, grade: 7, value: 207.10 }, { year: 2024, grade: 8, value: 235.80 }, { year: 2024, grade: 9, value: 225.20 },
            { year: 2025, grade: 3, value: 161.96 }, { year: 2025, grade: 4, value: 163.64 }, { year: 2025, grade: 5, value: 177.97 }, { year: 2025, grade: 6, value: 191.10 }, { year: 2025, grade: 7, value: 204.62 }, { year: 2025, grade: 8, value: 218.07 }, { year: 2025, grade: 9, value: 245.24 }
        ],
        "levels_2025": [
            { grade: 3, AB: 15.79, B: 51.75, AD: 28.07, AV: 4.39 },
            { grade: 4, AB: 45.45, B: 28.18, AD: 21.82, AV: 4.55 },
            { grade: 5, AB: 35.71, B: 54.76, AD: 9.52, AV: 0.00 },
            { grade: 6, AB: 51.76, B: 31.76, AD: 14.12, AV: 2.35 },
            { grade: 7, AB: 39.29, B: 46.43, AD: 10.71, AV: 3.57 },
            { grade: 8, AB: 35.19, B: 57.41, AD: 7.41, AV: 0.00 },
            { grade: 9, AB: 34.56, B: 53.68, AD: 11.03, AV: 0.74 }
        ]
    },
    "ciencias_humanas": {
        "label": "Ciências Humanas",
        "history": [
            // Apenas dados de 2025 disponíveis na tabela
            { year: 2025, grade: 4, value: 211.58 }, { year: 2025, grade: 5, value: 224.62 }, { year: 2025, grade: 6, value: 233.80 }, 
            { year: 2025, grade: 7, value: 238.28 }, { year: 2025, grade: 8, value: 252.38 }, { year: 2025, grade: 9, value: 268.22 }
        ],
        "levels_2025": [] // Não havia tabela de níveis para CH no documento
    }
};