# Introduction

This program allows you to read lines from the excel file. Each lines would be stored to the database.

# Usage

To use this tool, note that you need to step these steps:

```sh
git clone https://github.com/biud436/exceljs-file-read-test.git
cd exceljs-file-read-test
npm install
npm run start -- --file=res/M_GB16.9L-2_20211201_140029.xlsx
```

# 주의 사항

`chalk` 라이브러리를 타입스크립트에서 사용하려면 `npm install chalk@^4`를 실행해야 합니다. 5 버전은 ESM 문제로 동작하지 않습니다.
