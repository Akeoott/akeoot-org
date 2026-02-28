export class SkillIcons {
    private skills: string[] = [
        "cs", "dotnet", "py", "linux", "arch", "cloudflare",
        "nodejs", "vue", "tailwind", "js", "ts", "html", "css"
    ];

    private container: HTMLElement | null;

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
            img.className = "p-[2px]"
            img.src = `https://skillicons.dev/icons?i=${skill}`;
            img.decoding = "async";
            img.loading = "lazy";
            this.container!.appendChild(img);
        });
    }
}
