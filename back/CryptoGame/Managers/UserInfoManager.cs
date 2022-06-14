using CryptoGame.Entities;
using CryptoGame.Models;
using CryptoGame.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Managers
{
    public class UserInfoManager : IUserInfoManager
    {
        private readonly IUserInfoRepository userInfoRepository;

        public UserInfoManager(IUserInfoRepository userInfoRepository)
        {
            this.userInfoRepository = userInfoRepository;
        }

        public void Create(UserInfoModel model)
        {
            var newUI = new UserInfo
            {
                Id = model.Id,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                CreationDate = DateTime.Now
            };

            userInfoRepository.Create(newUI);
        }
        public void Update(UserInfoModel model)
        {
            var newUI = GetById(model.Id);
            newUI.FirstName = model.FirstName;
            newUI.LastName = model.LastName;
            newUI.Email = model.Email;
            
            
            userInfoRepository.Update(newUI);
        }

      
        public UserInfo GetById(string id)
        {
            var ui = userInfoRepository
                  .GetUserInfoIQueriable()
                  .Where(x => x.Id == id)
                  .FirstOrDefault();
            return ui;
        }

     

    }
}