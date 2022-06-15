using CryptoGame.Entities;
using CryptoGame.Managers;
using CryptoGame.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
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

        [HttpPost("add")]
        public async Task<IActionResult> Create([FromBody] LeaderboardModel leaderboard)
        {
            var id = Guid.NewGuid().ToString("N");
            await manager.AddRecord(new Leaderboard
            {
                Id = id,
                FirstName = leaderboard.FirstName,
                LastName = leaderboard.LastName,
                Score = leaderboard.Score,
                Currency = leaderboard.Currency,
                RegisterDay = leaderboard.RegisterDay
            });

            return Ok();
        }

        [HttpGet("leaderboard/getLeaderboard")]
        public async Task<IActionResult> GetLeaderboard()
        {
            var leaderboard = manager.GetLeaderboard();

            return Ok(leaderboard);
        }

        [HttpGet("leaderboard/byCurrency/{currency}")]
        [Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetLeaderboard(string currency)
        {
            var leaderboard = manager.GetLeaderboard(currency);

            return Ok(leaderboard);
        }

        [HttpGet("leaderboard/byId/{id}")]
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
