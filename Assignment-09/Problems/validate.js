Question : Given an array of objects, validate the array such that each object property inputs which is an array contains at least one value.

var list = [
  {
    "id": 1,
    "status": 1,
    "inputs": [
      "asd",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "test",
      ""
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "",
      "test1"
    ],
    "outputs": [
      ""
    ]
  },
  {
    "id": "",
    "status": 1,
    "inputs": [
      "gfg",
      ""
    ],
    "outputs": [
      ""
    ]
  }
]