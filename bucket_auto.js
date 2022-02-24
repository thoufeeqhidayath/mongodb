group the values based on field in to differnt buckets

db.artists.aggregate( [
  {
    $bucketAuto: {
      groupBy: "$_id",
      buckets: 5,
      output:{"count":{"$sum":1},

          "name":{"$push":{"names":"$first_name"}}
      }

    }
  }

 --------------

 //Copy from NoSQLBooster for MongoDB free edition. This message does not appear if you are using a registered version.

{
  "_id": {
    "min": 5,
    "max": 7
  },
  "count": 2,
  "name": [
    {
      "names": "Alfred"
    },
    {
      "names": "Edvard"
    }
  ]
},
{
  "_id": {
    "min": 1,
    "max": 3
  },
  "count": 2,
  "name": [
    {
      "names": "Emil"
    },
    {
      "names": "Joszef"
    }
  ]
},
{
  "_id": {
    "min": 3,
    "max": 5
  },
  "count": 2,
  "name": [
    {
      "names": "Anna"
    },
    {
      "names": "Vincent"
    }
  ]
},
{
  "_id": {
    "min": 7,
    "max": 8
  },
  "count": 2,
  "name": [
    {
      "names": "Odilon"
    },
    {
      "names": "Edvard"
    }
  ]
}