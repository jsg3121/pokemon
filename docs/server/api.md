# API

---

## Pokemon 조회

### 공통 Response

**State** : `Fail`

**Code** : `401`

**Result Data**

```json
{
  code : 401,
  message: "Authorizaion Fail",
  data : {
    error: error
  }
}
```

---

**State** : `Fail`

**Code** : `400`

**Result Data**

```json
{
  code : 400,
  message : "Bad Request",
  data : {
    error: error
  }
}
```

---

### Request

Pokemon List 조회

**URL** : `/api/v1/pokemon/list`

**Method** : `GET`

**Parameter** :

```text
?generate=123&name=리자몽&evolution=true&type=fire
```

| 구분      | Required | type    | 비고 |
| --------- | -------- | ------- | ---- |
| generate  | false    | number  |      |
| name      | false    | string  |      |
| evolution | false    | boolean |      |
| type      | false    | string  |      |

### Response

**State** : `Success`

**Code** : `200`

**Result Data**

```json
{
  code : 200,
  message: "Sussess",
  data : [
    {
      id: 1,
      pokemonNumber : 1,
      name: "이상해씨",
      type: ["풀","독"],
      typeSingle1: "풀",
      typeSingle2: "독",
      isEvolution: true,
      isRegion: false
    }, {
      id: 2,
      pokemonNumber : 1,
      name: "이상해씨",
      type: ["풀","독"],
      typeSingle1: "풀",
      typeSingle2: "독",
      isEvolution: true,
      isRegion: false
    }
  ]
}
```

---

## pokemon 상세

### Request

Pokemon Detail 조회

**URL** : `/api/v1/pokemon/list/:pokemonNumber`

**Method** : `GET`

### Response

**State** : `Success`

**Code** : `200`

**Result Data**

```json
{
  code : 200,
  message: "Sussess",
  data : {
    name : "이상해씨",
    type :["풀", "독"],
    generation: 1,
    weak: ["불", "비행"],
    strong: ["물"],
    regionForm:{
      region : "알로라",
      type: ["페어리"],
      weak: ["악"],
      strong:["드래곤"]
    }
  }
}
```
