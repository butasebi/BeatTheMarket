using CryptoGame.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserRepository repo;

        public UserController(IUserRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet("get-user")]
        public async Task<IActionResult> getUserByEmail([FromQuery] string email)
        {
            var user = repo.getUser(email);

            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return BadRequest("Something went wrong.");
            }
        }
    }
}
