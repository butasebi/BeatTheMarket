using Microsoft.EntityFrameworkCore;

namespace CryptoGame.Entities
{
    public class CryptoGameContext : DbContext
    {
        public DbSet<Leaderboard> Leaderboard { get; set;}

        public CryptoGameContext(DbContextOptions<CryptoGameContext> options) : base(options) { }
        /*
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        */
    }
}
