using CryptoGame.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace CryptoGame.Repositories
{
    public interface IHistoryRepository
    {
        Task AddRecord(History history);

        Task Delete(History history);

        IQueryable<History> GetHistory(string UserId);

        IQueryable<History> GetHistoryById(string Id);
    }
}
