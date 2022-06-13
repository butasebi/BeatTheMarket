using Microsoft.EntityFrameworkCore.Migrations;

namespace CryptoGame.Migrations
{
    public partial class Modified_Leadeboard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Currency",
                table: "Leaderboard",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Placement",
                table: "Leaderboard",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Currency",
                table: "Leaderboard");

            migrationBuilder.DropColumn(
                name: "Placement",
                table: "Leaderboard");
        }
    }
}
