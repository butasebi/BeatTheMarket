using CryptoGame.Entities;
using CryptoGame.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CryptoGame.Managers
{
    public interface IHistoryManager
    {
        Task AddRecord(History history);

        Task Delete(History history);

        List<History> GetHistory(string UserId);

        List<History> GetHistoryById(string Id);
    }
}
