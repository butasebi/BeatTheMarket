using System;

namespace CryptoGame.Entities
{
    public class Leaderboard
    {
        public string Id { get; set; }  //Ranking on the leaderboard

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Score { get; set; }

        public DateTime RegisterDay { get; set; }

    }
}
