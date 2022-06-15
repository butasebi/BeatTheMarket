using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Models
{
    public class HistoryModel
    {
        public string UserId { get; set; }

        public string Score { get; set; }

        public string Currency { get; set; }

        public DateTime RegisterDay { get; set; }
    }
}
