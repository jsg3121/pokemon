# API

---

## Pokemon 조회

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

---

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
**State** : `Success`

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

**State** : `Success`

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
