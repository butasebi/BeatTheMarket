using CryptoGame.Entities;
using CryptoGame.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CryptoGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaderboardController : Controller
    {
        private ILeaderboardManager manager;

        public LeaderboardController(ILeaderboardManager manager)
        {
            this.manager = manager;
        }

        [HttpPost("Add a new record in the leaderboard")]
        public async Task<IActionResult> Create([FromBody] Leaderboard leaderboard)
        {

            await manager.AddRecord(leaderboard);

            return Ok();
        }

        [HttpGet("Leaderboard data for a certain currency")]
        public async Task<IActionResult> GetLeaderboard(string currency)
        {
            var leaderboard = manager.GetLeaderboard(currency);

            return Ok(leaderboard);
        }

        [HttpGet("Get Leaderboard registry by Id")]
        public async Task<IActionResult> GetLeaderboardById(string id)
        {
            var leaderboard = manager.GetLeaderboardById(id);

            return Ok(leaderboard);
        }

        [HttpPost("Delete a record from the leaderboard")]
        public async Task<IActionResult> Delete(string Id)
        {
            var RegisterToDelete = manager.GetLeaderboardById(Id);

            await manager.Delete(RegisterToDelete[0]);

            return Ok();
        }
    }
}
