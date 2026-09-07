export class SkillIcons {
  private skills: string[] = [
    "rust", "cs", "dotnet",  "py", "linux", "arch", "cloudflare",
    "nodejs",  "js", "ts", "html", "css",  "vue", "tailwind",
  ];

  private readonly container: HTMLElement | null;

  constructor(containerId: string) {
    this.container = document.getElementById(containerId);

    if (!this.container) {
      console.warn(`Could not get id: ${containerId}`);
    }
  }

  public load(): void {
    if (!this.container) return;

    this.skills.forEach(skill => {
      const img: HTMLImageElement = document.createElement("img");
      img.className = "p-[3px]";
      img.src = `/images/skillicons/${skill}.svg`;
      img.alt = `${skill} icon`;
      img.decoding = "async";
      img.loading = "lazy";

      this.container!.appendChild(img);
    });
  }
}
