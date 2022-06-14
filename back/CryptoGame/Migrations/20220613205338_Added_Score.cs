using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoGame.Migrations
{
    public partial class Added_Score : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Score",
                table: "Leaderboard",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Score",
                table: "Leaderboard");
        }
    }
}
