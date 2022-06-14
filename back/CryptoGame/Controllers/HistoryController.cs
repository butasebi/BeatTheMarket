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

        [HttpGet("history/byUserId/{UserId}")]
        public async Task<IActionResult> GetHistory(string UserId)
        {
            var history = manager.GetHistory(UserId);

            return Ok(history);
        }

        [HttpGet("history/byId/{Id}")]
        public async Task<IActionResult> GetHistoryById(string Id)
        {
            var history = manager.GetHistoryById(Id);

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
