using CryptoGame.Entities;
using CryptoGame.Managers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CryptoGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {
        private IHistoryManager manager;

        public HistoryController(IHistoryManager manager)
        {
            this.manager = manager;
        }

        [HttpPost("Add a new record in the History")]
        public async Task<IActionResult> Create([FromBody] History history)
        {

            await manager.AddRecord(history);

            return Ok();
        }

        [HttpGet("History data for a certain user")]
        public async Task<IActionResult> GetHistory(string UserId)
        {
            var history = manager.GetHistory(UserId);

            return Ok(history);
        }

        [HttpGet("Get History registry by Id")]
        public async Task<IActionResult> GetHistoryById(string id)
        {
            var history = manager.GetHistoryById(id);

            return Ok(history);
        }

        [HttpPost("Delete a record from the history")]
        public async Task<IActionResult> Delete(string Id)
        {
            var RegisterToDelete = manager.GetHistoryById(Id);

            await manager.Delete(RegisterToDelete[0]);

            return Ok();
        }
    }
}
