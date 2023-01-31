# 데이터베이스

----------------------------------------------------------------

## DB 정보

* DB : PostgreSQL
* Name : pokemon_database

## ERD

```mermaid
erDiagram
 pokemon_info ||--o{ pokemon_region : pokemon_id
```

* ### Pokemon_info table

| key  | Name         | column         | type            | Default Data    | isNull |
| :--: | :----------- | :------------- | :-------------- | :-------------- | :----- |
|  PK  | 번호          | `id`           | `number`        | `Auto Increase` | false  |
|      | 도감 번호      | `number`       | `number`        |                 | false  |
|      | 이름          | `name`         | `string`        |                 | false  |
|      | 리전폼 여부     | `isRegion`     | `boolean`       | `false`         | false  |
|      | 메가진화 여부   | `isMega`       | `boolean`       | `false`         | false  |
|      | 전체 타입      | `type`         | `Array<string>` |                 | false  |
|      | 타입 1        | `type_single1` | `string`        |                 | false  |
|      | 타입 2        | `type_single2` | `string`        |                 | true   |
|      | 진화 여부      | `is_evolution` | `boolean`       |                 | true   |
|      | 진화 도감 번호  | `evolution_id` | `Array<number>` |                 | true   |
|      | 첫 등장 세대    | `generation`   | `number`        |                 | true   |

* ### Pokemon_region

| key  | Name        | column         | type            | Default Data         | isNull |
| :--- | :---------- | :------------- | :-------------- | :------------------- | :----- |
| PK   | 번호         | `id`           | `number`        | `Auto Increase`      | false  |
| FK   | 포켓몬 번호    | `pokemon_id`   | `number`        | `Pokemon_info Table` | false  |
|      | 도감 번호      | `number`       | `number`        |                     | false  |
|      | 지역         | `region`       | `string`        |                      | false  |
|      | 전체 타입     | `type`         | `Array<string>` |                      | false  |
|      | 타입 1       | `type_single1` | `string`        |                      | false  |
|      | 타입 2       | `type_single2` | `string`        |                      | true   |

* ### Pokemon_Mega

| key  | Name        | column         | type            | Default Data         | isNull |
| :--- | :---------- | :------------- | :-------------- | :------------------- | :----- |
| PK   | 번호         | `id`           | `number`        | `Auto Increase`      | false  |
| FK   | 포켓몬 번호    | `pokemon_id`   | `number`        | `Pokemon_info Table` | false  |
|      | 도감 번호     | `number`       | `number`        |                      | false  |
|      | 전체 타입     | `type`         | `Array<string>` |                      | false  |
|      | 타입 1       | `type_single1` | `string`        |                      | false  |
|      | 타입 2       | `type_single2` | `string`        |                      | true   |

* ### Pokemon_Type
  
| key  | Name        | column         | type            | Default Data         | isNull |
| :--- | :---------- | :------------- | :-------------- | :------------------- | :----- |
| PK   | 번호         | `id`           | `number`        | `Auto Increase`      | false  |
|      | 타입         | `type`         | `string`        |                      | false  |
|      | 강점         | `strong`       | `string`        |                      | true   |
|      | 약점         | `weak`         | `string`        |                      | true   |
|      | 무효         | `invalidity`   | `string`        |                      | true   |
