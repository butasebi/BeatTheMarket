using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CryptoGame.Managers;
using CryptoGame.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserInfoController : ControllerBase
    {
        private IUserInfoManager manager;

        public UserInfoController(IUserInfoManager userInfoManager)
        {
            this.manager = userInfoManager;
        }


        [HttpPost("CreateUser")]
        public async Task<IActionResult> Create([FromBody] UserInfoModel user)
        {
            manager.Create(user);
            return Ok();
        }

        [HttpGet("GetById/{id}")]
        [Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetById([FromRoute] string id)
        {
            var usersInfo = manager.GetById(id);

            return Ok(usersInfo);
        }

        [HttpPost("UpdateUserInfo")]
        [Authorize(Policy = "Admin")]
        public async Task<IActionResult> Update([FromBody] UserInfoModel user)
        {
            manager.Update(user);
            return Ok();
        }







        

    }
}