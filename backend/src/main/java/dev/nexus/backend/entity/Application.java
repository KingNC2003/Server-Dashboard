package dev.nexus.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Table(name="application")
public class Application{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private String description;

    @Column(nullable = false)
    private String url;

    @Column(nullable = true, name = "icon_key")
    private String iconKey;

    @Column(nullable = true, name = "repo_link")
    private String repoLink;

    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    protected Application(){
    }

    public Application(String name, String url, Category category){
        this.name = name;
        this.url = url;
        this.category = category;
    }

    public Long getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public String getDescription() {
    return description;
}

    public String getUrl() {
        return url;
    }

    public String getIconKey() {
        return iconKey;
    }

    public String getRepoLink() {
        return repoLink;
    }

    public Category getCategory() {
        return category;
    }
}