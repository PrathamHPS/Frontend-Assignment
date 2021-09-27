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

 
  

  for(let i=0; i<list.length; i++) {
    // console.log(list[i]['inputs']);
    
    if(list[i]['inputs'].length > 0 || list[i]['inputs'][0] != '') {
        list[i]['outputs'].pop()
        list[i]['outputs'].push('Valid');
    }
  }
  console.log(list)