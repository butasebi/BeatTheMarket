using CryptoGame.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using CsvHelper;

namespace CryptoGame.Repositories
{
    public class StatisticsRepository : IStatisticsRepository
    {
        private static readonly string apikey = "WYNLFMUXMELBE7KL";
        public StatisticsRepository() {}

        public List<Statistics> GetStatistics(string url)
        {
            List<Statistics> ret = new List<Statistics>();

            string QUERY_URL = url + String.Format("&apikey={0}", apikey);

            Console.WriteLine("API call: " + QUERY_URL);

            Uri queryUri = new Uri(QUERY_URL);

            CultureInfo culture = CultureInfo.CreateSpecificCulture("en-US"); ;
            using (WebClient client = new WebClient())
            {
                using (MemoryStream stream = new MemoryStream(client.DownloadDataTaskAsync(queryUri).Result))
                {
                    stream.Position = 0;

                    using (StreamReader reader = new StreamReader(stream))
                    {
                        using (CsvReader csv = new CsvReader(reader, CultureInfo.InvariantCulture))
                        {
                            csv.Read();
                            csv.ReadHeader();
                            // Console.WriteLine(string.Join("\t", csv.HeaderRecord));

                            while (csv.Read())
                            {
                                // Console.WriteLine(string.Join("\t", csv.Parser.Record));

                                Statistics statistics = new Statistics();
                                statistics.Date = DateTime.Parse(csv.Parser.Record[0]);
                                statistics.Price = double.Parse(csv.Parser.Record[1]);

                                Console.WriteLine("Date: " + statistics.Date);
                                Console.WriteLine("Price: " + statistics.Price);

                                ret.Add(statistics);
                            }
                        }
                    }
                }
            }
            Console.WriteLine(ret.Count);
            return ret;
        }
    }
}
