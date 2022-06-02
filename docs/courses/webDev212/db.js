// database for students
const keys = [
  'MWEA9RS', 'KP1h3cz', 'aL3xlDu', 'H3PnJwZ', 'UOgRnTB', 'hhI7SLH', 'OekW1Oe', 'YR7aG2k', '1Eky6nG', 'RaP8eFS', '2Z8St3G', '7U4Xmyj', '91szVYY', 'ZyFp8tq', '6vSXEGt', 'BNFjipy', 'N19iy8I', 'CQKI70x', 'PWDRgVO', 'esU61kK', 'PVl05Dd', 'NOGTzNe', 'BCCcshc', 'bQ04QZN', 'bLzEvRe', 'zRmvIBj', 'O2GbuYz', 'vFicdwa', 'ZqgoHVG', '2Db72ig', 'T72ccC2', 'rzfooYc', 'hPxmP3G', 'rEmCwdY', 'jggA9Eu', 'fWtgFnK', 'jC23IYL', '0E636Fk', 'iI0w7Bl', 'uiNDnNz', 'TEeQvXC', 'zRDBV7i', 'K9dQjIk', 'vtHcnwA', 'jEqmNJi', 'XWczHU0', 'KAwHYKu', '22dUH38', 'br99LWg', 'ewfPEB8', 'B7AHkDl', 'FBaDatP', '87JUU5y', 'RdGPjQX', 'kI9qkfn', 'fKGbdIs', 'GF9Bn2v', 'r5durMM', 'Ms8UDrG', 'a7fvuzS', 'zqzQtAx', 'Tz5qD8k', 'PIVjN3W', 'mNlQ77d', 'rDRfPBj', 'AZ4zKnx', '6aTovFt', 'ZOmEbu2', 'vVn52zM', 'zLZtida', 'qX06tl2', '4fadPv3', '09If993', 'p721Ylt', 'H94QUA0', 'Uh7kPj9', 'H7A8mTp', 'LhjRNbb', '4WtenFm', 'OeEPhcB', 'tkCuLdV', 'jNq0L0E', '0AlYG0a', 'tGW6666', 'HcsWVwA', 'O4LitPD', 'obDYrYq', 'Ui1lWgp', 'zcd88qa', 'KIseq1U', 'mt9uZc7', 'lDLIgSd', '1rpDQ6B', 'fkyXTDu', 'aAbm53V', 'DZU2E6j', 'fPqSL9J', 'jwajeiQ', 'wuRHhlH', '6TTP6PL'
]

module.exports = () => {
  let data = {
    test: {
      msg: "This is for test."
    }
  }
  // Create 100 users
  for (let i = 0; i < 100; i++) {
    data[keys[i]] = [
      {
        id: 'guyong',
        password: 'guyong123',
        name: '辜勇',
        tasks: [
          {
            name: "Steal bananas from supermarket.",
            status: "to-do"
          },
          {
            name: "Eat 1 kg chocolate in 1 hour",
            status: "finished"
          },
          {
            name: "Create YouTude video.",
            status: "finished"
          },
          {
            name: "learn vuejs in 2 weeks",
            status: "in-progress"
          },
          {
            name: "UC3 To Be Number One",
            status: "to-do"
          },
          {
            name: "Eat 1 kg chocolate in 3 hour",
            status: "to-do"
          }
        ]
      }
    ]
  }
  return data
}