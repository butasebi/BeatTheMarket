using CryptoGame.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    public interface IStatisticsRepository
    {
        List<Statistics> GetStatistics(string url);
    }
}
