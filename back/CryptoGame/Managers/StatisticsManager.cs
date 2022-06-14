using CryptoGame.Entities;
using CryptoGame.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Managers
{
    public class StatisticsManager : IStatisticsManager
    {
        private readonly IStatisticsRepository statisticsRepository;

        public StatisticsManager(IStatisticsRepository statisticsRepository)
        {
            this.statisticsRepository = statisticsRepository;
        }

        public List<Statistics> GetStatistics(string type, string symbol, string time_unit, DateTime time_start, DateTime time_end, string to_symbol = "USD")
        {
            // Map index funds names
            if (symbol == "NASDAQ-100")
            {
                symbol = "VCNIX";
            }
            else if (symbol == "S&P 500")
            {
                symbol = "500.PAR";
            }


            List<Statistics> ret = new List<Statistics>();

            string outputsize = "full";
            string datatype = "csv";

            if (type == "stock")
            {
                if (time_unit == "min")
                {
                    string function = "TIME_SERIES_INTRADAY";
                    string interval = "1min";
                    ret = statisticsRepository.GetStatistics(
                        String.Format("https://www.alphavantage.co/query?function={0}&symbol={1}&interval={2}&outputsize={3}&datatype={4}", 
                        function, symbol, interval, outputsize, datatype));

                }
                else if (time_unit == "day")
                {
                    string function = "TIME_SERIES_DAILY";
                    ret = statisticsRepository.GetStatistics(
                        String.Format("https://www.alphavantage.co/query?function={0}&symbol={1}&outputsize={2}&datatype={3}",
                        function, symbol, outputsize, datatype));
                }
                else if (time_unit == "week")
                {
                    string function = "TIME_SERIES_WEEKLY";
                    ret = statisticsRepository.GetStatistics(
                        String.Format("https://www.alphavantage.co/query?function={0}&symbol={1}&outputsize={2}&datatype={3}",
                        function, symbol, outputsize, datatype));
                }
                else
                {
                    throw new Exception("Time unit should be 'min', 'day' or 'week'");
                }
            }
            else if (type == "crypto")
            {
                if (time_unit == "min")
                {
                    string function = "CRYPTO_INTRADAY";
                    string interval = "1min";
                    ret = statisticsRepository.GetStatistics(
                        String.Format("https://www.alphavantage.co/query?function={0}&symbol={1}&interval={2}&market={3}&outputsize={4}&datatype={5}",
                        function, symbol, interval, to_symbol, outputsize, datatype));

                }
                else if (time_unit == "day")
                {
                    string function = "DIGITAL_CURRENCY_DAILY";
                    ret = statisticsRepository.GetStatistics(
                        String.Format("https://www.alphavantage.co/query?function={0}&symbol={1}&market={2}&outputsize={3}&datatype={4}",
                        function, symbol, to_symbol, outputsize, datatype));
                }
                else if (time_unit == "week")
                {
                    string function = "DIGITAL_CURRENCY_WEEKLY";
                    ret = statisticsRepository.GetStatistics(
                        String.Format("https://www.alphavantage.co/query?function={0}&symbol={1}&market={2}&outputsize={3}&datatype={4}",
                        function, symbol, to_symbol, outputsize, datatype));
                }
                else
                {
                    throw new Exception("Time unit should be 'min', 'day' or 'week'");
                }
            }
            else
            {
                throw new Exception("Type should be of type 'stock' or 'crypto");
            }

            ret = ret.FindAll(statistics => statistics.Date >= time_start && statistics.Date <= time_end);
            ret.Sort((statistics1, statistics2) => statistics1.Date.CompareTo(statistics2.Date));

            return ret;
        }

    }
}
