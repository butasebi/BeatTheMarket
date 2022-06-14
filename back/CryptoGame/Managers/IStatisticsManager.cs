using CryptoGame.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Managers
{
    public interface IStatisticsManager
    {
        List<Statistics> GetStatistics(string type, string symbol, string time_unit, DateTime time_start, DateTime time_end, string to_symbol = "USD");
    }
}
