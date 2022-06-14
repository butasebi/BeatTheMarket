using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoGame.Migrations
{
    public partial class Removed_Redundant_Placement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Placement",
                table: "Leaderboard");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Placement",
                table: "Leaderboard",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
