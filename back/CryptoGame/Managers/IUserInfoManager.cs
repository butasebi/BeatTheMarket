using CryptoGame.Entities;
using CryptoGame.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Managers
{
    public interface IUserInfoManager
    {

        UserInfo GetById(string id);

        void Create(UserInfoModel model);
        void Update(UserInfoModel model);

    }
}