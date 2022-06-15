using CryptoGame.Entities;
using CryptoGame.Models;
using CryptoGame.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Managers
{
    public class HistoryManager : IHistoryManager
    {
        private readonly IHistoryRepository HistoryRepo;
        public HistoryManager(IHistoryRepository repo)
        {
            this.HistoryRepo = repo;
        }

        public async Task AddRecord(History history)
        {
            await HistoryRepo.AddRecord(history);
        }

        public List<History> GetHistory(string UserId)
        {
            return HistoryRepo.GetHistory(UserId).ToList();
        }

        public List<History> GetHistoryById(string Id)
        {
            return HistoryRepo.GetHistoryById(Id).ToList();
        }

        public async Task Delete(History history)
        {
            HistoryRepo.Delete(history);
        }
    }
}
