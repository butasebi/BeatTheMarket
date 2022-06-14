using CryptoGame.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    public class HistoryRepository : IHistoryRepository
    {
        private readonly CryptoGameContext db;

        public HistoryRepository(CryptoGameContext CryptoGameContext)
        {
            this.db = CryptoGameContext;
        }

        public async Task AddRecord(History history)
        {
            await db.Histories.AddAsync(history);

            await db.SaveChangesAsync();
        }

        public IQueryable<History> GetHistory(string UserId)
        {
            var history = from Histories in db.Histories
                          where Histories.UserId == UserId
                          select Histories;

            return history;
        }

        public IQueryable<History> GetHistoryById(string Id)
        {
            var history = from Histories in db.Histories
                          where Histories.Id == Id
                          select Histories;

            return history;
        }

        public async Task Delete(History history)
        {
            db.Histories.Remove(history);

            await db.SaveChangesAsync();
        }
    }
}
