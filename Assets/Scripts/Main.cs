using UnityEngine;

public class Main : MonoBehaviour
{
  public GvrVideoPlayerTexture player;

  private bool _started;
  

  private void Start()
  {
    player.Init();
  }


  private void Update()
  {
    if (_started)
      return;

    if (!player.VideoReady)
      return;

    player.Play();
    _started = true;
  }
}