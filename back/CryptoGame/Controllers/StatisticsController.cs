using CryptoGame.Entities;
using CryptoGame.Managers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/*
API:
- https://localhost:5001/api/Statistics/get-statistics

Params:
- type : "stock" / "crypto" (any other string will return BadRequest)
- symbol : string
- time_unit : "minute" / "day" / "week" (any other string will return BadRequest) 
- time_start : DateTime (ex: 2010-01-01)
- time_end : DateTime (ex: 2019-01-02T00:00:00)
- to_symbol : string (optional - it is set be default to "USD")

Return:
- list of {"date" : DateTime, "price": double} sorted asc by date

Obs:
- for minute it will provide info from the last few days
- for crypto it has info after 2019/2020
- for stocks it does not provide weekend information (stock is closed)
- mapped index funds names - should be ok

Recommended implementation:
- because it can throw a bad request
- if it returns Ok() -> use info
- else -> use random generated data
*/

namespace CryptoGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatisticsController : ControllerBase
    {
        private IStatisticsManager statisticsManager;
        public StatisticsController(IStatisticsManager statisticsManager)
        {
            this.statisticsManager = statisticsManager;
        }


        [HttpGet("get-statistics")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetStatistics(string type, string symbol, string time_unit, DateTime time_start, DateTime time_end, string to_symbol = "USD")
        {
            try
            {
                List < Statistics > ret = statisticsManager.GetStatistics(type, symbol, time_unit, time_start, time_end, to_symbol).ToList();
                return Ok(ret);
            }
            catch (Exception ex)
            {
                return BadRequest(String.Format("Exception caught: {0}", ex.Message));
            }
        }
    }
}
